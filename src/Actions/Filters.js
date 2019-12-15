import React from 'react'

export default function Filters(props) {
    return (
        <form className='text-left'>
            <label className="font-weight-bold ml-3">Filters</label>
            <div className='border border-dark m-3 p-2'>
                <label className="font-weight-bold">Species</label>
                <div className="custom-control custom-radio">
                    <input id="human" name="species" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)}/>
                    <label className="custom-control-label" htmlFor="human">Human</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="mytholog" name="species" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="mytholog">Mytholog</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="alien" name="species" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="alien">Other species</label>
                </div>
            </div>
            <div className='border border-dark m-3 p-2'>
                <label className="font-weight-bold">Gender</label>
                <div className="custom-control custom-radio">
                    <input id="male" name="gender" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="male">Male</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="female" name="gender" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="female">Female</label>
                </div>
            </div>
            {/* <div className='border border-dark m-3 p-2'>
                <label className="font-weight-bold">Origin</label>
                <div className="custom-control custom-radio">
                    <input id="earth" name="origin" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="earth">Earth</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="post" name="origin" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="post">Post-Apocalyptic Earth</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="nuptia" name="origin" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="nuptia">Nuptia 4</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="unknown" name="origin" type="radio" className="custom-control-input" onClick={(e) => props.handler(e)} />
                    <label className="custom-control-label" htmlFor="unknown">Other Origins</label>
                </div>
            </div> */}
        </form>
    )
}