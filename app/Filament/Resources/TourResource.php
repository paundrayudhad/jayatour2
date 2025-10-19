<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourResource\Pages;
use App\Models\Tour;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static ?string $navigationIcon = 'heroicon-o-map';

    protected static ?string $navigationGroup = 'Master Data';

    protected static ?string $navigationLabel = 'Paket Tour';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Informasi Paket')->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Judul Paket')
                    ->required()
                    ->maxLength(150),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(150)
                    ->unique(table: 'tours', ignoreRecord: true),
                Forms\Components\Select::make('tour_category_id')
                    ->label('Kategori')
                    ->relationship('category', 'name')
                    ->searchable()
                    ->required(),
                Forms\Components\TextInput::make('duration')
                    ->label('Durasi')
                    ->required(),
                Forms\Components\TextInput::make('start_city')
                    ->label('Kota Keberangkatan')
                    ->required(),
                Forms\Components\Textarea::make('excerpt')
                    ->label('Ringkasan')
                    ->rows(3)
                    ->required(),
                Forms\Components\RichEditor::make('description')
                    ->label('Deskripsi Lengkap')
                    ->columnSpanFull()
                    ->required(),
            ])->columns(2),
            Forms\Components\Section::make('Pengaturan Harga & Highlight')->schema([
                Forms\Components\TextInput::make('price')
                    ->numeric()
                    ->prefix('Rp')
                    ->required(),
                Forms\Components\TextInput::make('thumbnail')
                    ->label('Path Thumbnail')
                    ->placeholder('images/tours/labuan-bajo.jpg')
                    ->required(),
                Forms\Components\Toggle::make('is_featured')
                    ->label('Tampilkan di beranda'),
                Forms\Components\Toggle::make('is_international')
                    ->label('Kategori Internasional'),
                Forms\Components\Repeater::make('highlights')
                    ->relationship()
                    ->schema([
                        Forms\Components\TextInput::make('title')->label('Highlight')->required(),
                        Forms\Components\TextInput::make('description')->label('Deskripsi')->required(),
                    ])
                    ->createItemButtonLabel('Tambah Highlight')
                    ->columnSpanFull(),
            ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable(),
                Tables\Columns\BadgeColumn::make('is_international')
                    ->label('Tipe')
                    ->formatStateUsing(fn (bool $state) => $state ? 'Internasional' : 'Domestik')
                    ->colors([
                        'success' => fn (bool $state) => ! $state,
                        'warning' => fn (bool $state) => $state,
                    ]),
                Tables\Columns\TextColumn::make('price')
                    ->label('Harga')
                    ->money('IDR', true)
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('Featured')
                    ->boolean(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime('d M Y H:i'),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('Featured'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTours::route('/'),
            'create' => Pages\CreateTour::route('/create'),
            'edit' => Pages\EditTour::route('/{record}/edit'),
        ];
    }
}
