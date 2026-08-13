export default function DougDetails(){
    const canDo = [
        "HTP (Hypertension, High Blood Pressure)", "High cholesterol", "CHF (Congestive Heart Failure)",
        "A-fib- maintenance of stable pt's (or started on basics while waiting to see cardio)",
        "Blood thinner management", "Asthma", "COPD (Chronic obstructive pulmonary disease)/emphysema/Bronchitis",
        "Sleep apnea-order sleep studies", 
        "Seuzure meds- maintenance ofmstabie of pt's (or started on basics while waiting to see neuro)",
        "Migraines", "Fibromyaliga", "Neuralgia-neuropathy", "Fatigue",
        "Weight loss", "Lab interpretation", "Anemia", "Diabetes",
        "Thyroid-high or low", "Depression", "Anxiety", "Celiac/Diverticulitis/Colitis",
        "GERD (Gastroesophageal Reflux Disease)/acid reflux", "Alcohal withdrawal", "hepatitis diagnosis -referal to Gl fortreatment",
        "Quitting nicotine", "Esophageal achalasia", "Pink eye",
        "Strep throat/sore throat", "Cough", "Pneumonia", "Dental abscess",
        "Cold sore/oral herpes", "Sinus infection", "Ear infection", "colds/illness",
        "Acne, rashes, ringworm, eczema", "UTIs (Urinary Tract Infection), yeast infections", "oral birth control",
        "Women's hormones-menopause, anorgasmia, low libido", "STD (Sexually Transmitted Disease) testing/treatment",
        "HIV/AIDS-PrEP treatment", "Erectile dysfunction", "Low Testosterone",
        "BPH (Benign prostatic hyperplasia)", "Overactive bladder, leaky bladder", "Arthritis",
        "Osteoporosis", "Pain management",
        "Screen for autoimmune (start basics while waiting for RheumatologyD)",
        "Screen for cancers (Mammogram, Colonoscopy, Low dose CT lung scan, CancerGuard)",
        "Ask me, if not listed!"
    ];
    return(<div className='wbox'>
        <h4 className="row between">
            <div>Douglas Ludington, NP</div>
            <div>doug.ludington@gmail.com</div>
            <div>505-730-9898</div>
        </h4>
        <div> PCP-telehealth scope of practice in UT, NM, MA, FL, OR, WA, AK</div>

        <p>Any referals--some examples:  audiclogy, ENT, cardio, pulm, dental, Gl, Rheum, Onco, Surgical</p>

        <p>Lab interpretation can diagnose the origin of certain disease processes </p>

        <p>
            For example pt complains of fatigue. depression, or anxiety: may consider ordering labs to Assess for thyroid function,  anemia, hormone levels (low T for men, estrogen/progesteron/testosterone for women), or celiac disease
        </p>

        <ul>
            {canDo.map((item, index)=>{
                return(<li key={index}>
                    {item}
                </li>);
            })}
        </ul>
    </div>)
}