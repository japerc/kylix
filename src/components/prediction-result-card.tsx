import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"

interface PredictionResultProps {
  prediction: [string, number] | null;
  destructCount: number;
}

const PredictionResult: React.FC<PredictionResultProps> = ({
  prediction,
  destructCount
}) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>Archaic or Classical</CardDescription>
      </CardHeader>
      <CardContent id={destructCount.toString()}>
        {(prediction) ?
          <p><b>{prediction[0].toUpperCase()}</b> <br /> Confidence {prediction[1] * 100} %</p>
          : <div className='flex flex-col gap-2'>
            <Skeleton className="h-5 w-[90px]" />
            <Skeleton className="h-5 w-[130px]" />
          </div>}
      </CardContent>
    </Card>
  );
};

export default PredictionResult;