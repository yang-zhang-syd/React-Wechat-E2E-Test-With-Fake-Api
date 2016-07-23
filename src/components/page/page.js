import React, {PropTypes} from 'react';
import './page.css';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
              {(() => {
                  if(title !== '') {
                    return (<div className="hd">
                      <h1 className="title">{title}</h1>
                      <p className="sub_title">{subTitle}</p>
                    </div>);
                  }
                  else {
                    // add spacer here?
                  }
                }
              )()
              }
            <div className={`bd ${spacing ? 'spacing' : ''}`}>
                {children}
            </div>
            </section>
        );
    }
}