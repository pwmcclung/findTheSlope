function slope(points)
{
let slope = ((points[3] -points[1]) / (points[2] - points[0]))
if (isFinite(slope) === false) {
            slope = undefined;
            } else {
           slope = Math.floor(slope);
            }
        return String(slope);

}
