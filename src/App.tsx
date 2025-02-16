import InputImage from "@/components/ui/InputImage";
import { useState, useRef } from "react";
import SubmitImage from "@/components/ui/Submit";
import ImageSocket from "@/components/ui/ImageSocket";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

function App() {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [destructCount, setDestructCount] = useState(0);
  const [predictionLabel, setPredictionLabel] = useState<string | null>(null);
  const [predictionConfidence, setPredictionConfidence] = useState<number | null>(null);

  const handleButtonClick = () => {
    imageInputRef.current?.click();
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-background">
      <div className="sticky top-0 flex flex-wrap pt-1 pb-2 pl-2 sm:pl-4 w-full z-10 bg-transparent backdrop-blur-md justify-between border-b" >
        <h1 className="text-left text-foreground font-extrabold tracking-tight">Kylix Classifier</h1>
        <div className="flex h-[3.2em] pt-3 pb-1 pr-2 md:pr-5">
          <a href="https://github.com/japerc/kylix-app" target="_blank" rel="noopener noreferrer" className="flex">
            <img src="/github-mark.svg" alt="Invertocat Logo" />
          </a>
        </div>
      </div>
      <div className="mt-8 gap-8 flex flex-wrap justify-center items-start bg-background">
        <Card className="pt-6 md:w-96">
          <CardContent>
            <ImageSocket
              image={image}
              setImage={setImage}
              destructCount={destructCount}
              setDestructCount={setDestructCount}
              setPredictionLabel={setPredictionLabel}
              setPredictionConfidence={setPredictionConfidence} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <InputImage
              setImage={setImage}
              setPredictionLabel={setPredictionLabel}
              setPredictionConfidence={setPredictionConfidence}
              destructCount={destructCount}
              ref={imageInputRef}
              hidden={true} />
            <Button onClick={handleButtonClick} variant="outline"> Upload Image </Button >
            <SubmitImage
              image={image}
              variant="outline"
              setLabel={setPredictionLabel}
              setConf={setPredictionConfidence} />
          </CardFooter>
        </Card >

        <Card >
          <CardHeader>
            <CardTitle>Prediction Result</CardTitle>
            <CardDescription>Archaic or Classical</CardDescription>
          </CardHeader>
          <CardContent id={destructCount.toString()}>
            {(predictionLabel && predictionConfidence) ?
              <p><b>{predictionLabel.toUpperCase()}</b> <br /> Confidence {predictionConfidence * 100} %</p>
              : null}
          </CardContent>
        </Card >
      </div>
    </div >
  );
}

export default App;