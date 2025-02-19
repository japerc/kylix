import React from 'react';
import { Client, handle_file } from "@gradio/client";
import { Button, ButtonProps } from "@/components/ui/button";
import { Crosshair } from "lucide-react";

interface SubmitImageProps
  extends ButtonProps {
  image: null | string;
  setPrediction: React.Dispatch<React.SetStateAction<[string, number] | null>>
}

const SubmitImage: React.FC<SubmitImageProps> = (
  { image, setPrediction, ...props }) => {
  const [waiting, setWaiting] = React.useState(false);

  const handleSubmit = async () => {
    try {
      const client = await Client.connect("japerc/kylix-fragment-classifier");
      if (!image) {
        alert("Please upload an image first!");
      }
      else {
        setWaiting(true);
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        const result = await client.predict("/predict", { img: handle_file(file) });
        setWaiting(false);
        if (result.type === "data") {
          const data = result.data as { confidences: { label: string, confidence: number }[] }[];
          setPrediction([data[0].confidences[0].label, Number(data[0].confidences[0].confidence.toFixed(2))])
        }
        else {
          console.log(result);
          alert("Unknown response type: Please check the console for more information.");
        }
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please check the console for more information.")
    }
  };

  if (waiting) {
    return (
      <Button {...props} disabled>
        <Crosshair className="animate-spin" />
        Please wait
      </Button>
    )
  }
  if (!image) {
    return (
      <Button onClick={handleSubmit} {...props} disabled>
        <Crosshair /> Predict
      </Button>
    )
  }
  return (
    <Button onClick={handleSubmit} {...props}>
      <Crosshair /> Predict
    </Button>
  )
}

export default SubmitImage;