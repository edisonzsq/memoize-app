# Performance Tuning Challenge

## Brief

This exercise is a result of a career workshop I gave to some students. We spoke about optimizing react components given the component re-renders unexpectedly.

## Problem

In this code base, the parent component will make a copy of a mock data and pass to the child every 1 second. As a result, the child component would re-render each time a new data is passed via props. 

> Because object and array as passed by reference, JavaScript considers a copy of array as a brand new value. 
> Learn more about passing by reference vs value [here](https://github.com/edisonzsq/sctp-se-m2-week2-coaching) or [here](https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/)

Read [Parent Component](./src/components/Parent.js) comments.

## Your Goal

To optimize this, only re-render the child when the value of the tax input has changed.

END