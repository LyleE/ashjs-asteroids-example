define( "game/nodes/render",
    [ "ash/node", "game/components/position", "game/components/display" ],
    function( Node, Position, Display ) {
        function Render() {
            Object.extend( Render.prototype, Node.prototype );
        }
        Render.prototype.position = null;
        Render.prototype.display = null;
        Render.prototype.types = {
            position : Position,
            display : Display
        };
        return Render;
    }
);