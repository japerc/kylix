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
  setPrediction: React.Dispatch<React.SetStateAction<[string, number] | null>>;
}

const Examples: React.FC<ExampleProps> = ({ setImage, setPrediction }) => {

  const handleButtonClick = (image: string) => {
    setImage(image)
    setPrediction(null)
  }

  return <Card className="w-full">
    <CardHeader>
      <CardTitle>Examples</CardTitle>
      <CardDescription>Choose an image to send to the model.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-row items-start justify-center gap-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={() => handleButtonClick(archaicExample)} className="flex w-2/5 h-fit p-0 rounded-lg">

            <img src={archaicExample} alt="Example 1" className="w-full h-auto rounded-lg hover:ring active:border" />

          </TooltipTrigger>
          <TooltipContent>Archaic</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={() => handleButtonClick(classicalExample)} className="flex w-2/5 h-fit p-0 rounded-lg">
            <img src={classicalExample} alt="Example 2" className="w-full h-auto rounded-lg hover:ring active:border" />
          </TooltipTrigger>
          <TooltipContent>Classical</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </CardContent >
  </Card >
}

export default Examples;