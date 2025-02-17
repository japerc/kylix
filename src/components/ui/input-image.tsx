import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

interface InputImageProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionLabel: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionConfidence: React.Dispatch<React.SetStateAction<number | null>>;
  destructCount: number;
  ref: React.RefObject<HTMLInputElement | null>;
  hidden?: boolean;
}

const InputImage = forwardRef<HTMLInputElement, InputImageProps>((
  {
    setImage,
    setPredictionLabel,
    setPredictionConfidence,
    destructCount,
    hidden
  },
  ref) => {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setPredictionLabel(null);
      setPredictionConfidence(null);
      setImage(URL.createObjectURL(files[0]));
    };
  };

  if (hidden) {
    return <Input
      type="file"
      accept="image/*"
      className="hidden"
      ref={ref}
      onChange={handleImageChange}
      key={destructCount}
    />
  }
  else {
    return <Input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      key={destructCount}
    />
  }
});

export default InputImage;