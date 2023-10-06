import { useState } from "react";
import Comparison from "../components/Comparison";
import { Container } from "react-bootstrap";

const PComparsionnn = () => {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const checkIsSamePerson = () => {
    // const checkIsSamePerson = (event) => {
    // event.preventDefault()

    // if (!personOne || !personTwo) {
    //   alert("Orang Pertama & Kedua Tidak VALID");
    // }

    setIsLoading(true);
    setIsChecked(true);

    // setTimeout(() => {
    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }

    setIsLoading(false);
    // }, 1000);
  };

  return (
    <Container>
      <card className="mt-5">
        <div className="d-flex-colum justify-content-center align-content-center">
          <Comparison
            personOne={personOne}
            personTwo={personTwo}
            isChecked={isChecked}
            isSamePerson={isSamePerson}
            isLoading={isLoading}
            checkIsSamePerson={checkIsSamePerson}
            setPersonOne={setPersonOne}
            setPersonTwo={setPersonTwo}
            setIsChecked={setIsChecked}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptas ea
              voluptatem! Mollitia ipsam labore nostrum nulla voluptatem quae dignissimos pariatur
              omnis maxime ullam? Quas deleniti repellendus accusamus unde nulla!
            </p>
          </Comparison>
        </div>
      </card>
    </Container>
  );
};

export default PComparsionnn;
