
export default function RankPositionImage({index})
{
    let image=<></>
    switch (index) {
        case 0:
            image = (
                <img
                    className="w-8 inline-block"
                    src="/storage/images/002-best.svg"
                />
            );
            break;
        case 1:
            image = (
                <img
                    className="w-8 inline-block"
                    src="/storage/images/003-second.svg"
                />
            );
            break;
        case 2:
            image = (
                <img
                    className="w-8 inline-block"
                    src="/storage/images/004-third.svg"
                />
            );
            break;
    }
    return image
}