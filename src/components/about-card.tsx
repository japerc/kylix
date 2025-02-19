import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card"
import WikimediaApiRequest from "@/components/wikimedia-api-request"

export default function AboutCard() {
  return (

    <Card className="w-full md:min-h-[445px] md:w-96">
      <CardHeader>
        <CardTitle>About This Project</CardTitle>
        <CardDescription>Classifying ancient Greek cup fragments by period.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1" >
            <AccordionTrigger className="bg-inherit">Project Purpose</AccordionTrigger>
            <AccordionContent>
              The Kylix Classifier helps users distinguish between Archaic and
              Classical kylix fragments. I chose this project because I found it
              challenging to make this distinction myself. This made it the perfect
              case study to learn about image classification with deep learning.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-inherit">Kylix Wikipedia Entry</AccordionTrigger>
            <AccordionContent>
              <WikimediaApiRequest />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-inherit">Tech Stack and Architecture</AccordionTrigger>
            <AccordionContent>
              This app uses a React (Vite) frontend, with model inference hosted on Hugging Face Spaces
              using Gradio. The model is a fine-tuned ResNet-18 pretrained on ImageNet, achieving 78%
              accuracy on the validation set.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-inherit">Dataset</AccordionTrigger>
            <AccordionContent>
              The model was fine-tuned on public domain images of kylix fragments
              from The MET’s open access collection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="bg-inherit">Key Learnings</AccordionTrigger>
            <AccordionContent>
              Through this project, I gained practical experience with fine-tuning pretrained models
              and deploying them using Hugging Face Spaces and Gradio. I also learned
              the basics of React states, hooks and renders. Overall, it was a useful
              learning experience in both deep learning and frontend integration.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card >
  )
}