function ContentL({content=Array, row=false }){ //white box with border
    let classes = row?"wbox row": "wbox";
    let text = "";
    return(<div className={classes}>
        {content.map((item)=>{
            return(<p key={item}>
                {item}
            </p>);
        })}
    </div>);
}

function ContentD({content=Array, row=false }){ //dark color box without border
    let classes = row?"dbox row": "dbox";
    let text = "";
    return(<div className={classes}>
        {content.map((item)=>{
            return(<p key={item}>
                {item}
            </p>);
        })}
    </div>);
}

function ContentN({content=Array, row=false }){ //no box or border
    let classes = row?"nbox row": "nbox";
    let text = "";
    return(<div className={classes}>
        {content.map((item)=>{
            return(<p key={item}>
                {item}
            </p>);
        })}
    </div>);
}

export {ContentL, ContentD, ContentN};

/* content strusture:
[ <-- box
    [ <-- paragraph 1
        <p className={"cat"}>text</p>
    ],
    [...]<-- paragraph 2 etc.
]
*/