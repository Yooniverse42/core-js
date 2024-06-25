
import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js"

/**
 * 
 * @param {HTMLElement | String} node 
 * @param {String} message 
 * @param {Number} timeout
 * @returns {void} 
 */
// void :  어떤한 값도 내보내지 않겠다라는 말! 언디파인드를 내보내는 것과는 다름.

export function showAlert(node, message, timeout = 1000) {

  if(isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');
    setTimeout(()=>{
      removeClass(node, 'is-active');
    },timeout)
}

