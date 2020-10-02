import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .wrap-980 {
        width: 980px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
    }
    .d-flex {
        display: flex;
    }
    .icon-all {
        display: inline-block;
        background: url(${require('@/assets/img/iconall.png')}) no-repeat;
    }
    .icon-index {
        display: inline-block;
        background: url(${require('@/assets/img/index.png')}) no-repeat;
    }
    .icon-many {
        display: inline-block;
        background: url(${require('@/assets/img/icon.png')}) no-repeat;
    }
    .icon-playbar {
        display: inline-block;
        background: url(${require('@/assets/img/playbar.png')});
    }
    .icon-playbar_8 {
        display: inline-block;
        background: url(${require('@/assets/img/playbar_8.png')});
    }
    .text-noWrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .u-line {
        &:hover {
            text-decoration: underline;
        }
    }
    .c-p {
        cursor: pointer;
    }
    .f-l {
        float: left;
    }
    .f-r {
        float: right;
    }
    .j-c {
        justify-content: center;
    }
    .a-c {
        align-items: center;
    }
    .clear::after {
        content: '';
        clear: both;
        height: 0;
        display: block;
        visibility: hidden;
    }
    .music-play {
        cursor: pointer;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        &:hover {
            background-position: 0 -60px;
        }
    }
    .music-play-1 {
        cursor: pointer;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        &:hover {
            background-position: 0 -110px;
        }
    }
`
