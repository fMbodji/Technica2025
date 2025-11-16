import { useState } from 'react'
import { DndContext, DragOverlay, closestCenter, useSensor, useSensors, PointerSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Trash2 } from 'lucide-react'
import Card from '../../shared/Card'
import Button from '../../shared/Button'

// Block definitions (shared with palette)
export const BLOCK_DEFINITIONS = {
  'move-up': { label: 'Move Up', code: 'moveUp()' },
  'move-down': { label: 'Move Down', code: 'moveDown()' },
  'move-left': { label: 'Move Left', code: 'moveLeft()' },
  'move-right': { label: 'Move Right', code: 'moveRight()' },
  'if-then': { label: 'If...Then', code: 'if (condition) { }' },
  'repeat': { label: 'Repeat 5 Times', code: 'for (let i = 0; i < 5; i++) { }' },
  'wait': { label: 'Wait 1 Second', code: 'await sleep(1000)' },
  'set-var': { label: 'Set Variable', code: 'let x = 0' },
  'change-var': { label: 'Change Variable', code: 'x = x + 1' },
  'play-sound': { label: 'Play Sound', code: 'playSound("beep")' },
  'stop-sound': { label: 'Stop Sound', code: 'stopSound()' }
}

function SortableBlock({ block, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: block.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border-2 border-primary rounded-lg p-4 mb-2 flex items-center justify-between group"
    >
      <div className="flex items-center gap-3 flex-1" {...attributes} {...listeners}>
        <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true" />
        <p className="font-semibold text-navy">{block.label}</p>
      </div>
      <button
        onClick={() => onDelete(block.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-100 rounded"
        aria-label={`Delete ${block.label} block`}
      >
        <Trash2 size={18} className="text-red-500" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function BlockCanvas({ blocks, onBlocksChange, onGenerateCode, ageRange }) {
  const [activeId, setActiveId] = useState(null)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (!over) {
      setActiveId(null)
      return
    }

    // Reorder existing blocks
    if (active.id !== over.id) {
      const oldIndex = blocks.findIndex(block => block.id === active.id)
      const newIndex = blocks.findIndex(block => block.id === over.id)

      if (oldIndex !== -1 && newIndex !== -1) {
        const newBlocks = arrayMove(blocks, oldIndex, newIndex)
        onBlocksChange(newBlocks)
      }
    }

    setActiveId(null)
  }

  const handleDelete = (blockId) => {
    const newBlocks = blocks.filter(block => block.id !== blockId)
    onBlocksChange(newBlocks)
  }

  const activeBlock = activeId ? blocks.find(b => b.id === activeId) : null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event) => setActiveId(event.active.id)}
      onDragEnd={handleDragEnd}
    >
      <Card ageRange={ageRange} className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-2xl font-bold text-navy">
            Your Canvas 🎨
          </h2>
          <Button
            variant="primary"
            size="sm"
            ageRange={ageRange}
            onClick={onGenerateCode}
            disabled={blocks.length === 0}
          >
            Run Code! 🚀
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-[300px] bg-cream rounded-lg p-4">
          {blocks.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <p className="text-xl text-navy/50 mb-2">Click blocks from the palette! 👆</p>
                <p className="text-base text-navy/40">Start building your project</p>
              </div>
            </div>
          ) : (
            <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
              {blocks.map(block => (
                <SortableBlock
                  key={block.id}
                  block={block}
                  onDelete={handleDelete}
                />
              ))}
            </SortableContext>
          )}
        </div>
      </Card>
      <DragOverlay>
        {activeBlock ? (
          <div className="bg-white border-2 border-primary rounded-lg p-4 opacity-90">
            <p className="font-semibold text-navy">{activeBlock.label}</p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

