import { useState, useEffect, useRef } from 'react'
import { Mic, MicOff } from 'lucide-react'
import Button from '../../shared/Button'

export default function VoiceInput({ onTranscript, ageRange }) {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    // Check if Web Speech API is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SpeechRecognition) {
      setIsSupported(true)
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        if (onTranscript) {
          onTranscript(transcript)
        }
        setIsListening(false)
      }

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
        if (onTranscript) {
          onTranscript('', true) // Pass error flag
        }
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [onTranscript])

  const toggleListening = () => {
    if (!isSupported) {
      alert('Voice input is not supported in your browser. Please use Chrome or Edge.')
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
    } else {
      try {
        recognitionRef.current?.start()
        setIsListening(true)
      } catch (error) {
        console.error('Error starting recognition:', error)
        setIsListening(false)
      }
    }
  }

  if (!isSupported) {
    return (
      <div className="text-center p-4 bg-warmGray/50 rounded-lg">
        <p className="text-lg text-navy/70">
          Voice input requires Chrome or Edge browser
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant={isListening ? 'secondary' : 'primary'}
        size="xl"
        ageRange={ageRange}
        onClick={toggleListening}
        className="w-full max-w-md"
        aria-label={isListening ? 'Stop listening' : 'Start voice input'}
      >
        {isListening ? (
          <>
            <MicOff size={32} className="mr-3" aria-hidden="true" />
            Listening... Click to stop
          </>
        ) : (
          <>
            <Mic size={32} className="mr-3" aria-hidden="true" />
            Click to speak, we'll listen
          </>
        )}
      </Button>
      {isListening && (
        <div className="flex items-center gap-2 text-primary">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" aria-hidden="true" />
          <p className="text-xl font-semibold">Listening...</p>
        </div>
      )}
    </div>
  )
}

