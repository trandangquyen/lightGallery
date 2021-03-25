export interface ThumbnailsSettings {
    /**
     * Enable thumbnails for the gallery
     */
    thumbnail: boolean;

    /*
     * Enable thumbnail animation.
     */
    animateThumb: boolean;

    /**
     * Position of selected thumbnail.
     */
    currentPagerPosition: 'left' | 'middle' | 'right';

    /**
     * Position of thumbnails.
     */
    alignThumbnails: 'left' | 'middle' | 'right';

    /**
     * Width of each thumbnails.
     */
    thumbWidth: number;

    /**
     * Height of each thumbnails. Applicable only if animateThumb is false.
     */
    thumbHeight: string;

    /**
     * Spacing between each thumbnails
     */
    thumbMargin: number;

    /**
     * Option to fetch different thumbnail image other than first image
     * @description If you want to use external image for thumbnail,
     * add the path of that image inside "data-" attribute
     * and set value of this option to the name of your custom attribute.
     *
     * @example
     * <div id="lightGallery">
     *     <a href="a.jpg" data-external-thumb-image="images/externalThumb.jpg" ><img src="thumb.jpg" /></a>
     * </div>
     *
     * lightGallery(document.getElementById('lightGallery'), {
     *     exThumbImage: 'data-external-thumb-image'
     * })
     */
    exThumbImage: false;

    /**
     * control where the thumbnails should be appended.
     * By default, thumbnails are appended to '.lg-components' which has inbuilt open close transitions
     * If you don't want initial thumbnails transitions, or want to do more customization,
     * you can append thumbnails to the lightGalley outer div -
     * <a href="/demos/thumbnails/#static-thumbnails">Demo</a>
     */
    appendThumbnailsTo: '.lg-outer' | '.lg-components';

    /**
     * Enable toggle captions and thumbnails.
     * @description not applicable if allowMediaOverlap is false
     */
    toggleThumb: boolean;

    /**
     * Enables desktop mouse drag support for thumbnails.
     */
    enableThumbDrag: boolean;

    /**
     * Enables thumbnail touch/swipe support for touch devices
     */
    enableThumbSwipe: boolean;

    /**
     * By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev slide.
     */
    swipeThreshold: number;

    /**
     * You can automatically load thumbnails for YouTube videos from YouTube by setting loadYouTubeThumbnail true
     */
    loadYouTubeThumbnail: boolean;

    /**
     * You can specify the thumbnail size by setting respective number.
     */
    //@todo add demo
    youTubeThumbSize: number;
}

export const thumbnailsSettings: ThumbnailsSettings = {
    thumbnail: true,

    animateThumb: true,
    currentPagerPosition: 'middle',
    alignThumbnails: 'middle',

    thumbWidth: 100,
    thumbHeight: '80px',
    thumbMargin: 5,

    exThumbImage: false,
    appendThumbnailsTo: '.lg-components',
    toggleThumb: false,

    enableThumbDrag: true,
    enableThumbSwipe: true,
    swipeThreshold: 10,

    loadYouTubeThumbnail: true,
    youTubeThumbSize: 1,
};
