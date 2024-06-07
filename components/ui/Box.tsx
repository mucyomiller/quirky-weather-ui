"use client";
import styled from 'styled-components';

interface BoxProps {
    display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    bg?: string;
    color?: string;
    p?: string;
    m?: string;
    minHeight?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'justify-all';
}

const Box = styled.div<BoxProps>`
  display: ${(props) => props.display || 'block'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  background-color: ${(props) => props.bg || 'transparent'};
  color: ${(props) => props.color || 'inherit'};
  padding: ${(props) => props.p || '0'};
  margin: ${(props) => props.m || '0'};
  min-height: ${(props) => props.minHeight || 'auto'};
  text-align: ${(props) => props.textAlign || 'left'};
`;

export { Box };
