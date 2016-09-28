/**
 * Created by mi on 28.09.16.
 */
import React from 'react';

export default (props) => {
    const { comment } = props;

    return (
        <span>
            <strong>{comment.user} said:</strong> {comment.text}
        </span>
    );
}