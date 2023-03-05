import React from 'react';

function Card({title, text, children}){
    return(
        <div className="card">
            {children}
            <div className="card-body">
                {   //проверка, чтобы не выводить пустой тэг в случае отсутствия title
                    title && title.trim().length ?
                        <h5 className="card-title">{title}</h5> :
                        undefined
                }
                {   //проверка, чтобы не выводить пустой тэг в случае отсутствия text
                    text && text.trim().length ?
                        <p className="card-text">{text}</p> :
                        undefined
                }
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

}
export default Card