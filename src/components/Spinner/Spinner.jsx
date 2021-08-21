import './Spinner.css';
const Spinner = ()=>{
    return (
        <div className="spinner-border page-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
};

export default  Spinner;