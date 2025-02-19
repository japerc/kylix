import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

interface InputImageProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setPrediction: React.Dispatch<React.SetStateAction<[string, number] | null>>;
  destructCount: number;
  ref: React.RefObject<HTMLInputElement | null>;
  hidden?: boolean;
}

const InputImage = forwardRef<HTMLInputElement, InputImageProps>((
  {
    setImage,
    setPrediction,
    destructCount,
    hidden
  },
  ref) => {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setPrediction(null);
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