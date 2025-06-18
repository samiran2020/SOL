import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@radix-ui/react-context-menu';
import { Album } from '../data/albums';
import { playlists } from '../data/playlists';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
    album: Album;
    aspectRatio?: 'portrait' | 'square';
    width?: number;
    height?: number;
}

export function AlbumArtwork({
    album,
    aspectRatio = 'portrait',
    width,
    height,
    className,
    ...props
}: AlbumArtworkProps) {
    return (
        <div className={cn('space-y-3', className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="overflow-hidden rounded-md">
                        <Image
                            src={album.cover}
                            alt={album.name}
                            width={width}
                            height={height}
                            className={cn(
                                'h-auto object-cover transition-all hover:scale-105',
                                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
                            )}
                        />
                    </div>
                </ContextMenuTrigger>
            </ContextMenu>
            <div className="space-y-1 text-sm text-center">
                {/* <h3 className="font-medium leading-none">{album.name}</h3> */}
                <p className="text-xs text-black">{album.artist}</p>
            </div>
        </div>
    );
}
