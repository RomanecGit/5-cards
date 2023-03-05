import React from 'react';
import Img from './Img';

function Card({title, text, children}){
    return(
        <div className="card">
            {//на лекции Егор говорил, что изображение может выводиться как-то сложно,
                //например с возможностью редактирования итп, поэтому сделал вывод изображений
                //отдельно 
                React.Children.map(children , (child, i) =>
                child.type === 'img' ?
                    <div className="imgEditor">
                        {child}
                    </div> :
                    {child}
            )}
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