import Sample from "../../assets/images/sample.png";

function GuideLine() {
    return (<div className="content-card card-guideline">
        <h3>
            Guidelines <span>(How to upload prescription)</span>
        </h3>
        <p>
            Do not crop out any part of the prescription image. Avoid
            unclear or blurred image of your prescription. Include details
            of your doctor, patient and clinic visit date. Medicines will
            only be dispensed against a valid prescription.
        </p>
        <div className="sample-image">
            <img src={Sample} alt="" />
        </div>
    </div>);
}

export default GuideLine;