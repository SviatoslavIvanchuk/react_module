import {useEffect, useState} from "react";

import Launch from "../launch/Launch";
import '../../App.css'

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value.filter(value => value.launch_year !== '2020')))
    }, [])

    return (
        <div className={'launches'}>
            {launches.map(value => <Launch id={value.flight_number} name={value.mission_name} year={value.launch_year}
                                           img={value.links.mission_patch_small} />)}
        </div>
    );
};

export default Launches;