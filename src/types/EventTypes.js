/**
 * Copyright © 2016, Ambroise Maupate
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * @file EventTypes.js
 * @author Ambroise Maupate
 * @author Adrien Scholaert
 */

/**
 * Before initialize XHR request to load new page.
 *
 * @type {String}
 */
export const BEFORE_PAGE_LOAD = 'SB_BEFORE_PAGE_LOAD'

/**
 * After XHR request succeeded.
 *
 * @type {String}
 */
export const AFTER_PAGE_LOAD = 'SB_AFTER_PAGE_LOAD'

/**
 * After Dom service appended new page DOM to page-container.
 *
 * @type {String}
 */
export const AFTER_DOM_APPENDED = 'SB_AFTER_DOM_APPENDED'

/**
 * When new page container is ready.
 *
 * @type {String}
 */
export const CONTAINER_READY = 'SB_CONTAINER_READY'

/**
 * After PageBuilder create new page instance.
 *
 * @type {String}
 */
export const AFTER_PAGE_BOOT = 'SB_AFTER_PAGE_BOOT'

/**
 * Before page transition begin.
 *
 * @type {String}
 */
export const TRANSITION_START = 'SB_TRANSITION_START'

/**
 * After page transition completed.
 *
 * @type {String}
 */
export const TRANSITION_COMPLETE = 'SB_TRANSITION_COMPLETE'

/**
 * Before splashscreen begin to hide.
 *
 * @type {String}
 */
export const BEFORE_SPLASHSCREEN_HIDE = 'SB_BEFORE_SPLASHSCREEN_HIDE'

/**
 * When splashscreen start to hide.
 *
 * @type {String}
 */
export const START_SPLASHSCREEN_HIDE = 'SB_START_SPLASHSCREEN_HIDE'

/**
 * After splashscreen hiding animation.
 *
 * @type {String}
 */
export const AFTER_SPLASHSCREEN_HIDE = 'SB_AFTER_SPLASHSCREEN_HIDE'
