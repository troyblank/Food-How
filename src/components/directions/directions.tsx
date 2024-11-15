import React, { type FunctionComponent } from 'react';
import { Step } from './';

type DirectionsProps = {
    steps: any
}

export const Directions: FunctionComponent<DirectionsProps> = ({ steps }) => {
    return (
        <ol>
            { steps.map((step, index) => (
                Array.isArray(step) ?
                    <Directions steps={step} key={`sublist-${index}`} />
                :
                    <Step
                        key={step.text}
                        text={step.text}
                        type={step.type}
                    />
            ))}
        </ol>
    )
}
