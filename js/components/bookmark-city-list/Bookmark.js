var Bookmark = (function () {
    function Bookmark(name, description, center, zoom) {
        this.name = name;
        this.description = description;
        this.center = center;
        this.zoom = zoom;
    }
    Bookmark.prototype.getName = function () {
        return this.name;
    };
    Bookmark.prototype.getDescription = function () {
        return this.description;
    };
    Bookmark.prototype.getCenter = function () {
        return this.center;
    };
    Bookmark.prototype.getZoom = function () {
        return this.zoom;
    };
    return Bookmark;
}());
