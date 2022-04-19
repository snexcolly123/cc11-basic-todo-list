function Button(props){
const classes = `btn btn-${props.color || 'primary'} shadow-none`;

    return <button className={classes}>
        {props.children}
    </button>
}

export default Button;


//note
//const classes = `btn btn-${props.color || 'primary'}`;  set defaultให้สีเป็นprimary โดยใช้ ||
//{props.children} คือเอาสิ่งที่อยู่ระหว่างtag <Button>...</Button> คือส่วนนี้...