"use client"


import { InputWithLabel } from "@/components/inputs/inputWithLabel"
import { TextAreaWithLabel } from "@/components/inputs/TextareaWithLabel"
import { CheckboxWithLabel } from "@/components/inputs/CheckboxWithLabel"




export default function JobFields() {
    

    return (
        <div>
            <InputWithLabel
                fieldTitle="Job"
                nameInSchema="title"
            />
            <TextAreaWithLabel
                fieldTitle="Notes"
                nameInSchema="notes"
            />
            <div className="flex justify-between">
                <InputWithLabel
                    fieldTitle="Bid Amount"
                    nameInSchema="bidAmount"
                    className="w-1/2"
                />
                <div className="flex flex-col gap-6">
                    <CheckboxWithLabel
                        fieldTitle="Accepted"
                        nameInSchema="bidAccepted"
                        message="Accepted"
                        />
                    <CheckboxWithLabel
                        fieldTitle="Completed"
                        nameInSchema="completed"
                        message="Completed"
                        />
                </div>
            </div>
        </div>
    )
}