import { CSSProperties, InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

// types
export interface InputSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  switchClassName?: string
  switchStyle?: CSSProperties
}

const StyledSwitch = styled.div`
  max-height: var(--base-input-size);
  min-height: var(--base-input-size);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .switch-body {
    --bheight: calc(var(--base-input-size) * 0.7);
    --bwidth: calc(var(--bheight) * 1.75);
    position: relative;
    display: inline-block;
    height: var(--bheight);
    width: var(--bwidth);

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    input:checked + .slider {
      background-color: var(--color-hl-00);
    }

    input:checked + .slider:before {
      transform: translateX(calc(var(--bheight) * 0.8));
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-grey-05);
      transition: 0.4s;
      border-radius: calc(var(--bheight) / 2);

      &:before {
        position: absolute;
        content: '';
        height: calc(var(--bheight) * 0.8);
        width: calc(var(--bheight) * 0.8);
        left: calc(var(--bheight) * 0.1);
        bottom: calc(var(--bheight) * 0.1);
        background-color: var(--color-grey-08);
        transition: 0.4s;
        border-radius: 50%;
      }
    }
  } // switch-body
`

export const InputSwitch = forwardRef<HTMLInputElement, InputSwitchProps>(
  ({ switchStyle, switchClassName, ...props }, ref) => (
    <StyledSwitch style={switchStyle} className={`${switchClassName} ${props.className}`}>
      <label className="switch-body">
        <input type="checkbox" {...props} ref={ref} />
        <span className="slider"></span>
      </label>
    </StyledSwitch>
  ),
)
