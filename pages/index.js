import React from 'react';
import css from 'styled-jsx/css';

import importedStyledJsxCss from '../lib/styled-jsx-css';
import importedStyledJsxCssFromStyleSheetString from '../lib/styled-jsx-css-from-style-sheet-string';
const localStyledJsxCss = css`body { background-color: purple; }`;

const styleSheetString = 'body { background-color: green; }';
const localStyledJsxCssFromStyleSheetString = css`${styleSheetString}`;

import styleSheet from './style-sheet.css';

export default () => {
  return (
    <div>
      {/* 👍 <style id="__jsx-id">body{background-color:red;}</style> */}
      <style jsx global>{`body { background-color: red; }`}</style>

      {/* 👍 <style id="__jsx-id">body{background-color:orange;}</style> */}
      <style jsx global>{'body { background-color: orange; }'}</style>

      {/* 👍 <style id="__jsx-id">body{background-color:blue;}</style> */}
      <style jsx global>{importedStyledJsxCss}</style>

      {/* 🤔 <style id="__jsx-id">{body { background-color: yellow; };}</style> */}
      <style jsx global>{importedStyledJsxCssFromStyleSheetString}</style>

      {/* 🤔 <style id="__jsx-id">{body{background-color:purple;}</style> */}
      <style jsx global>{`${localStyledJsxCss}`}</style>

      {/* 🤔 <style id="__jsx-id">{body { background-color: green; };}</style> */}
      <style jsx global>{`${styleSheetString}`}</style>

      {/* 🤔 <style id="__jsx-id">{{body { background-color: green; };}</style> */}
      <style jsx global>{`${localStyledJsxCssFromStyleSheetString}`}</style>

      {/* 😢 SyntaxError: The Identifier `localStyledJsxCss` is either `undefined` or it is not an external StyleSheet reference i.e. it doesn't come from an `import` or `require` statement */}
      {/* <style jsx global>{localStyledJsxCss}</style> */}

      {/* 😢 SyntaxError: The Identifier `styleSheetString` is either `undefined` or it is not an external StyleSheet reference i.e. it doesn't come from an `import` or `require` statement */}
      {/* <style jsx global>{styleSheetString}</style> */}

      {/* 😢 SyntaxError: Expected a template literal or String literal as the child of the JSX Style tag (eg: <style jsx>{`some css`}</style>), but got BinaryExpression */}
      {/* <style jsx global>{''+styleSheetString}</style> */}

      {/* 😢 SyntaxError: The Identifier `localStyledJsxCssFromStyleSheetString` is either `undefined` or it is not an external StyleSheet reference i.e. it doesn't come from an `import` or `require` statement */}
      {/* <style jsx global>{localStyledJsxCssFromStyleSheetString}</style> */}

      {/* 🎉 */}
      <style jsx global>{styleSheet}</style>
    </div>
  );
};
