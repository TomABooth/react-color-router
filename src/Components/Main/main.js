import React from 'react';
import { useParams } from 'react-router-dom';
import './main.css';

export default function main() {
  const { red, green, blue } = useParams();
  return <main></main>;
}
