import { Fragment, useState } from 'react';
import "./styles.css"

export default function Stepper(props) {

    const { steps: originalSteps, stepperContainer, navConainerStyle, contentContainerStyle } = props;

    const [steps, setSteps] = useState(originalSteps);
    const [currentStep, setCurrentStep] = useState(0);

    if (steps[0].prevBtnStyle || steps[0].prevBtnTxt) {
        console.warn("Properties for previous step button doesn't have effect in the first step");
        delete steps[0].prevBtnTxt;
        delete steps[0].prevBtnStyle;
        delete steps[0].prevCallback;
    }

    return (
        <div className={`stepper container ${stepperContainer}`}>
            <div className='header row'>
                {steps.map((step, index) =>
                    <Fragment key={`step-${index}`}>
                        <div className="step col">
                            <button type="button"
                                className="trigger"
                                disabled={step.disabled}
                                onClick={() => {
                                    setCurrentStep(index)
                                }}>
                                <div className={`circle 
                                ${currentStep === index ?
                                        "bg-primary" : step.completed ?
                                            "bg-success" : ""
                                    }`}
                                >{index + 1}</div>
                                <div className="label">{step.label}</div>
                            </button>
                        </div>
                        {index !== steps.length - 1 &&
                            <div className="d-none d-md-block line"></div>
                        }
                    </Fragment>
                )}
            </div>
            <div className='row'>
                <div className={contentContainerStyle}>
                    {steps[currentStep].child}
                </div>
            </div>
            <div className={`row ${navConainerStyle}`}>
                <div className='text-end'>
                    {currentStep > 0 &&
                        <button
                            className={steps[currentStep].prevBtnStyle}
                            onClick={() => steps[currentStep].prevCallback(setSteps, currentStep, setCurrentStep)}
                        >
                            &#x1F878; {steps[currentStep].prevBtnTxt}
                        </button>
                    }
                    <button
                        className={`${steps[currentStep].nextBtnStyle} mx-2`}
                        onClick={() => steps[currentStep].nextCallback(setSteps, currentStep, setCurrentStep)}
                    >
                        {steps[currentStep].nextBtnTxt} {currentStep < steps.length - 1 && <>&#x1F87A;</>}
                    </button>
                </div>
            </div>
        </div >
    )
}

