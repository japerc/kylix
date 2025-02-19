import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"

import Header from "@/components/header-component";
import ImageUploadSection from "@/components/image-upload-card";
import PredictionResult from "@/components/prediction-result-card";
import About from "@/components/about-card"
import Examples from "@/components/examples";

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [destructCount, setDestructCount] = useState(0);
  const [prediction, setPrediction] = useState<[string, number] | null>(null);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen w-screen bg-background">
        <Header />
        <div className="p-8 gap-8 flex flex-col md:flex-row justify-between items-start items-justify bg-background">
          <About />
          <ImageUploadSection
            image={image}
            setImage={setImage}
            destructCount={destructCount}
            setDestructCount={setDestructCount}
            setPrediction={setPrediction}
          />
          <div className="flex flex-col w-full md:w-1/3 shrink justify-between gap-8">
            <Examples
              setImage={setImage}
              setPrediction={setPrediction} />
            <PredictionResult
              prediction={prediction}
              destructCount={destructCount}
            />
          </div>

        </div>
      </div >
    </ThemeProvider>
  );
}

export default App;