import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Stepper from '@material-ui/core/Stepper';
//import Step from '@material-ui/core/Step';
//import StepLabel from '@material-ui/core/StepLabel';
//import Typography from '@material-ui/core/Typography';
import PersonalInformation from '../../components/form/personal-information/PersonalInformation'
import AddressInformation from '../../components/form/address-information/AddressInformation'
import PlaceOrder from '../../components/form/place-order/PlaceOrder'
import SubmittedMessage from '../../components/form/submitted-message/SubmittedMessage'
import './Stepper.css'

/* const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(7),
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
})); */

function getSteps() {
    return ['Personal Information', 'Adress Information', 'Place your order'];
}

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <PersonalInformation handleNext={handleNext} />;
        case 1:
            return <AddressInformation handleNext={handleNext} />;
        case 2:
            return <PlaceOrder handleNext={handleNext} />;
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    //const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    return (
        <div className='stepper-container'>
            <div className='stepper'>
                 <div activeStep={activeStep}> 
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <p>Optional</p>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <div key={label} {...stepProps}>
                                <div {...labelProps}>{label}</div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <SubmittedMessage />
                        </div>
                    ) : (
                        <div>
                            <div component="span" className='text'>{getStepContent(activeStep, handleNext)}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}