import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"

import Header from "@/components/header-component";
import ImageUploadSection from "@/components/image-upload-card";
import PredictionResult from "@/components/prediction-result-card";
import About from "@/components/about-card"

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [destructCount, setDestructCount] = useState(0);
  const [predictionLabel, setPredictionLabel] = useState<string | null>(null);
  const [predictionConfidence, setPredictionConfidence] = useState<number | null>(null);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">

      <div className="flex flex-col h-screen w-screen bg-background">
        <Header />
        <div className="p-8 gap-8 flex flex-col md:flex-row justify-between items-start items-justify bg-background">
          <About />
          <ImageUploadSection
            image={image}
            setImage={setImage}
            destructCount={destructCount}
            setDestructCount={setDestructCount}
            setPredictionLabel={setPredictionLabel}
            setPredictionConfidence={setPredictionConfidence}
          />
          <PredictionResult
            predictionLabel={predictionLabel}
            predictionConfidence={predictionConfidence}
            destructCount={destructCount}
          />
        </div>
      </div >
    </ThemeProvider>
  );
}

export default App;