import { Play, Square } from 'lucide-react'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import { TIERS } from '../../../utils/constants'

export default function ProjectPreview({ code, isRunning, onRun, onStop }) {
  return (
    <Card tier={TIERS.MIDDLE_SCHOOL} className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-heading text-2xl font-bold text-navy">
          Preview 👀
        </h2>
        {!isRunning ? (
          <Button
            variant="secondary"
            size="sm"
            tier={TIERS.MIDDLE_SCHOOL}
            onClick={onRun}
            disabled={!code}
          >
            <Play size={18} className="mr-2" aria-hidden="true" />
            Run
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            tier={TIERS.MIDDLE_SCHOOL}
            onClick={onStop}
          >
            <Square size={18} className="mr-2" aria-hidden="true" />
            Stop
          </Button>
        )}
      </div>

      <div className="flex-1 bg-navy rounded-lg p-6 text-white font-code overflow-auto min-h-[200px]">
        {code ? (
          <pre className="text-sm whitespace-pre-wrap">{code}</pre>
        ) : (
          <div className="flex items-center justify-center h-full text-center">
            <p className="text-navy/50">Your code will appear here! 👆</p>
          </div>
        )}
      </div>

      {isRunning && (
        <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
          <p className="text-center text-navy font-semibold">
            🎮 Running your project!
          </p>
        </div>
      )}
    </Card>
  )
}

