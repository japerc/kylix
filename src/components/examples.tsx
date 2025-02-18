import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import archaicExample from "@/examples/archaic.jpg"; // Adjust the path as necessary
import classicalExample from "@/examples/classical.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ExampleProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionLabel: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionConfidence: React.Dispatch<React.SetStateAction<number | null>>;
}

const Examples: React.FC<ExampleProps> = ({ setImage, setPredictionLabel, setPredictionConfidence }) => {

  const handleArchaicButtonClick = () => {
    setImage(archaicExample)
    setPredictionLabel(null)
    setPredictionConfidence(null)
  }

  const handleClassicalButtonClick = () => {
    setImage(classicalExample)
    setPredictionLabel(null)
    setPredictionConfidence(null)
  }

  return <Card className="w-full">
    <CardHeader>
      <CardTitle>Examples</CardTitle>
      <CardDescription>Choose an image to send to the model.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-row items-start justify-center gap-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={handleArchaicButtonClick} className="flex w-2/5 h-fit p-0">

            <img src={archaicExample} alt="Example 1" className="w-full h-auto rounded-lg hover:ring active:border" />

          </TooltipTrigger>
          <TooltipContent>
            Archaic
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={handleClassicalButtonClick} className="flex w-2/5 h-fit p-0">
            <img src={classicalExample} alt="Example 2" className="w-full h-auto rounded-lg hover:ring active:border" />
          </TooltipTrigger>
          <TooltipContent>
            Classical
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </CardContent >
  </Card >
}

export default Examples;