import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface PredictionResultProps {
  predictionLabel: string | null;
  predictionConfidence: number | null;
  destructCount: number;
}

const PredictionResult: React.FC<PredictionResultProps> = ({
  predictionLabel,
  predictionConfidence,
  destructCount
}) => {

  return (
    <Card className="w-full md:w-96">
      <CardHeader>
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>Archaic or Classical</CardDescription>
      </CardHeader>
      <CardContent id={destructCount.toString()}>
        {(predictionLabel && predictionConfidence) ?
          <p><b>{predictionLabel.toUpperCase()}</b> <br /> Confidence {predictionConfidence * 100} %</p>
          : null}
      </CardContent>
    </Card>
  );
};

export default PredictionResult;