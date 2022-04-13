import './App.css';
import Stepper from './react-bootstrap-stepper';
import styles from './react-bootstrap-stepper/styles.module.css';

function App() {

  const nextStep = (setSteps, currentStep, setCurrentStep) => {
    setSteps((prev) => [...prev
      .map((step, index) =>
        currentStep === index ? { ...step, completed: true, disabled: false } : step
      )]);
    setCurrentStep(prev => prev + 1);
  }

  const prevStep = (setSteps, currentStep, setCurrentStep) => {
    setCurrentStep(prev => prev - 1);
  }
  const finalStep = (setSteps, currentStep, setCurrentStep) => {
    alert('Final Step!');
  }

  const step1 =
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">@</span>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>;

  const step2 = <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
    <span className="input-group-text" id="basic-addon2">@example.com</span>
  </div>;

  const step3 = <>
    <label for="basic-url" className="form-label">Your vanity URL</label>
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
    </div>
  </>
    ;

  const step4 = <div className="input-group mb-3">
    <span className="input-group-text">$</span>
    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
    <span className="input-group-text">.00</span>
  </div>;


  return (
    <Stepper steps={[
      {
        label: "User name",
        disabled: false,
        child: step1,
        nextBtnStyle: "btn btn-primary",
        nextBtnTxt: "Next",
        nextCallback: nextStep,
        completed: false,
      },
      {
        label: "Recipient's username",
        disabled: true,
        child: step2,
        nextBtnStyle: "btn btn-primary",
        nextBtnTxt: "Next",
        prevBtnStyle: "btn btn-danger",
        prevBtnTxt: "Back",
        nextCallback: nextStep,
        prevCallback: prevStep,
        completed: false,
      },
      {
        label: "Your vanity URL",
        disabled: true,
        child: step3,
        nextBtnStyle: "btn btn-primary",
        nextBtnTxt: "Next",
        prevBtnStyle: "btn btn-danger",
        prevBtnTxt: "Back",
        nextCallback: nextStep,
        prevCallback: prevStep,
        completed: false,
      },
      {
        label: "Amount (to the nearest dollar)",
        disabled: true,
        child: step4,
        nextBtnStyle: "btn btn-success",
        nextBtnTxt: "Finish",
        prevBtnStyle: "btn btn-danger",
        prevBtnTxt: "Back",
        nextCallback: finalStep,
        prevCallback: prevStep,
        completed: false,
      }
    ]}
      stepperContainer="card"
      contentContainerStyle={`mt-3 card-body ${styles.contentContainer}`}
      navConainerStyle="card-footer"
    />
  );
}

export default App;
