import '../../App.css'

const Launch = (props) => {
    const {id, name, year, img} = props;

    return (
        <div className={'launch'}>
            <h3>{id}. {name} - {year}</h3>
            <img src={img} alt="patchImg"/>

        </div>
    );
};

export default Launch;