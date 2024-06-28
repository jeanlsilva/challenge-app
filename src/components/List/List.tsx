import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "../ui/accordion";

export function List() {
    return (
        <Accordion type="multiple" className="flex-1">
            <AccordionItem value="item-1">
                <AccordionTrigger>User 1</AccordionTrigger>
                <AccordionContent>
                    User 1 data
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>User 2</AccordionTrigger>
                <AccordionContent>
                    User 2 data
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}