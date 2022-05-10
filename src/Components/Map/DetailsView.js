import React from 'react';

const totalKeyArray = ['pH', 'DO', 'EC'];

function DetailsView(props) {
    const {
        location: { name, latest },
        onClickClose
    } = props;

    let title = name;
    // if (province !== '' && province !== country) {
    //     title = `${province}, ${country}`;
    // }

    const totalElements = totalKeyArray.map(key => {
        const count = latest[key];
        console.log(count)
        return (
            <div key={key} className="grid grid-cols-2">
                <div className="">
                    <h6 className="">{key}</h6>
                </div>
                <div className="">
                    <p className="text-right">{count}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-white border-t-8 border-solid border-black shadow-md w-80 p-5 fixed top-0 right-0 bottom-0 z-20">
            <div className="text-3xl leading-4 absolute top-3 right-3 z-20 cursor-pointer" onClick={onClickClose}>&times;</div>
            <div className="details-view-content">
                <h4 className="title is-4">{title}</h4>
                {totalElements}
            </div>
        </div>
    );
}

export default DetailsView;