/**
 * Copyright (c) 2017 Chris Baker <mail.chris.baker@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const EVENT_TRANSFORM = {
  onPress: 'onClick',
  onPressIn: 'onMouseDown',
  onPressOut: 'onMouseUp',
}

function prepareChildProps(props) {
  let childProps = {
    ...props
  }
  for (let key in EVENT_TRANSFORM) {
    if (childProps[key]) {
      if (!childProps[EVENT_TRANSFORM[key]]) {
        childProps[EVENT_TRANSFORM[key]] = childProps[key]
      }
      delete childProps[key]
    }
  }
  return childProps
}

function createClass(name, type) {
  return class extends React.Component {
    static displayName = name
    static propTypes = {
      children: PropTypes.node,
    }
    static defaultProps = {
      children: undefined,
    }
    setNativeProps = nativeProps => {
      this.setState(prevState => {
        return {
          ...prevState,
          nativeProps: nativeProps,
        }
      })
    }
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      let childProps = prepareChildProps(this.props)
      if (this.state.nativeProps) {
        childProps = {
          ...childProps,
          ...this.state.nativeProps,
        }
      }
      return React.createElement(type, childProps, this.props.children)
    }
  }
}

const Svg = (module.exports = createClass('Svg', 'svg'))

Svg.Circle = createClass('Circle', 'circle')
Svg.ClipPath = createClass('ClipPath', 'clipPath')
Svg.Defs = createClass('Defs', 'defs')
Svg.Ellipse = createClass('Ellipse', 'ellipse')
Svg.G = createClass('G', 'g')
Svg.Image = createClass('Image', 'image')
Svg.Line = createClass('Line', 'line')
Svg.LinearGradient = createClass('LinearGradient', 'linearGradient')
Svg.Path = createClass('Path', 'path')
Svg.Polygon = createClass('Polygon', 'polygon')
Svg.Polyline = createClass('Polyline', 'polyline')
Svg.RadialGradient = createClass('RadialGradient', 'radialGradient')
Svg.Rect = createClass('Rect', 'rect')
Svg.Stop = createClass('Stop', 'stop')
Svg.Svg = createClass('Svg', 'svg')
Svg.Symbol = createClass('Symbol', 'symbol')
Svg.Text = createClass('Text', 'text')
Svg.TextPath = createClass('TextPath', 'textPath')
Svg.TSpan = createClass('TSpan', 'tspan')
Svg.Use = createClass('Use', 'use')
