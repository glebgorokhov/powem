/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import popups from '../blocks/popups/popups';
import {slider} from '../blocks/slider/slider';
import tabs from '../blocks/tabs/tabs';
import {header} from "../components/header/header";

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  popups();
  slider();
  tabs();
  header();
});
/* eslint-enable */
