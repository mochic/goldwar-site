import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'

const MainContainer = styled.div``
const ChildContainer = styled.div``


export default class CarouselLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage = 0,
            scrolling: false,
        }
    }

    componentDidMount = () => {
        window.addEventListener('mousewheel', this.handleMouseWheel, false)
        window.addEventListener('touchmove', this.handleTouchMove, false)
        window.addEventListener('touchstart', this.handleTouchStart, false)
    }

    componentWillUnmount = () => {
        window.removeEventListener('mousewheel', this.handleMouseWheel, false)
        window.removeEventListener('touchmove', this.handleTouchMove, false)
        window.removeEventListener('touchstart', this.handleTouchStart, false)
    }

    handleMouseWheel = () => {
        console.log('handling mouse wheel')
    }

    handleTouchMove = () => {
        console.log('handling touch move')
    }
    
    handleTouchStart = () => {
        console.log('handling touch start')
    }

    render = () => (
        <MainContainer>
        {
            this.props.children.map(
                (child, idx) => (
                    <ChildContainer id={`child-${idx}`}>
                        {child}
                    </ChildContainer>
                )
            )
        }
        </MainContainer>
    )
}