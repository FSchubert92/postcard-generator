import React from 'react'
import { useSwipeable } from 'react-swipeable'
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT,
} from './components'

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos
}
const initialState = { pos: 0, sliding: false, dir: NEXT }

const Carousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const numItems = React.Children.count(props.children)
  const slide = dir => {
    dispatch({ type: dir, numItems })
    setTimeout(() => {
      dispatch({ type: 'stopSliding' })
    }, 50)
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    trackMouse: true,
  })
  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButton onClick={() => slide(PREV)} float="left">
        Prev
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)} float="right">
        Next
      </SlideButton>
    </div>
  )
}

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'reset':
      return initialState
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      }
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      }
    case 'stopSliding':
      return { ...state, sliding: false }
    default:
      return state
  }
}

export default Carousel

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       position: 0,
//       sliding: false,
//       direction: "next",
//       autoPlay: false
//     };
//   }

//   nextSlide = () => {
//     const { position } = this.state;
//     const { children } = this.props;
//     const numItems = children.length || 1;
//     this.doSliding("next", position === numItems - 1 ? 0 : position + 1);
//   };

//   prevSlide = () => {
//     const { position } = this.state;
//     const { children } = this.props;
//     const numItems = children.length;
//     this.doSliding("prev", position === 0 ? numItems - 1 : position - 1);
//   };

//   doSliding = (direction, position) => {
//     this.setState({
//       sliding: true,
//       position,
//       direction
//     });
//     setTimeout(() => {
//       this.setState({
//         sliding: false
//       });
//     }, 50);
//   };

//   render() {
//     const { title, children } = this.props;

//     return (
//       <div>
//         <Wrapper>
//           <CarouselContainer
//             direction={this.state.direction}
//             sliding={this.state.sliding}
//           >
//             {children.map((child, index) => (
//               <CarouselSlot
//                 key={index}
//                 order={this.getOrder(index)}>
//                 {child}
//               </CarouselSlot>
//             ))}
//           </CarouselContainer>
//         </Wrapper>
//       </div>
//     );
//   }
// }
// Carousel.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node
// };
// export default Carousel;
