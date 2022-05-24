import React, { useEffect, useState } from 'react';

export default function ErrorMessage(props){
    return <span className={"error"}>{props.error}</span>
}
