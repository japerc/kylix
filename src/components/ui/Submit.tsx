import React from 'react';
import { Client, handle_file } from "@gradio/client";
import { Button, ButtonProps } from "@/components/ui/button";

interface SubmitImageProps {
  image: null | string;
  buttonProps?: ButtonProps;
}


const SubmitImage: React.FC<SubmitImageProps> = ({ image, buttonProps }) => {

  const handleSubmit = async () => {
    try {
      const client = await Client.connect("japerc/kylix-fragment-classifier");
      if (!image) {
        alert("Please upload an image first");
      }
      else {
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        const result = await client.predict("/predict", { img: handle_file(file) });
        if (result.type === "data") {
          const data = result.data as { confidences: { label: string, confidence: number }[] }[];
          alert(data[0].confidences[0].label + ' ' + String(data[0].confidences[0].confidence));
        }
        else {
          console.log(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };
  return (
    <Button onClick={handleSubmit} {...buttonProps}>
      Predict
    </Button>
  )
}

export default SubmitImage;